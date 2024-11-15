export async function middlewareAuth(req) {
  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");
  const option = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    option
  );
  const { data } = await response.json();
  const { user } = data || {};
  return user;
}
