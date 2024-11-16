
import Avatar from "@/ui/Avatar";
import Button from "@/ui/Button";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";

function Comment({ comment, onAddComment }) {
  return (
    <>
      <div className="flex items-center justify-between pb-2 mb-5 border-b border-b-secondary-200/60">
        <div className="flex items-center ">
          <Avatar
            height={34}
            width={34}
            alt={comment.user?.name || "-"}
            src={comment.user.avatarUrl}
          />
          <div className="w-full text-sm text-secondary-600">
            <span className="block mb-1 font-bold">{comment.user.name}</span>
            <span className="block text-xs text-secondary-500">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <Button
          //     onClick={onAddComment}
              variant="secondary"
              className="flex p-1 text-sm rounded-lg gap-x-1 text-secondary-500 bg-secondary-200"
            >
              <span className="ml-1">
                <ArrowUturnRightIcon className="w-4" />
              </span>
              <span>پاسخ</span>
            </Button>
          )}
        </div>
      </div>
      <p className="text-xs leading-loose text-secondary-700 lg:leading-8 lg:text-base">
        {comment.content.text}
      </p>
    </>
  );
}
export default Comment;
