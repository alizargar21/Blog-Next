import Button from "@/ui/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import React from "react";
import Comment from "./Comment";
function PostComment({ post: { comments, _id: postId } }) {
  return (
    <div>
      <div className="mb-10">
        <div className="flex flex-col items-center justify-between mb-8 lg:flex-row gap-y-3">
          <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
          <Button
          //   onClick={() => addNewCommentHandler(null)}
            variant="outline"
            className="flex items-center py-2"
          >
            <QuestionMarkCircleIcon className="w-4 ml-2" />
            <span>ثبت نظر جدید</span>
          </Button>
          {/* <Modal
          title={parent ? "پاسخ به نظر" : "نظر جدید"}
          description={parent ? parent.user.name : "نظر خود را وارد کنید"}
          open={isOpen}
          onClose={() => setOpen(false)}
        >
          <CommentForm
            postId={postId}
            parentId={parent ? parent._id : null}
            onClose={() => setOpen(false)}
          />
        </Modal> */}
        </div>
        <div className="px-3 py-6 space-y-8 post-comments bg-secondary-0 rounded-xl lg:px-6 ">
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <div className="p-2 mb-3 border border-secondary-200 rounded-xl sm:p-4">
                    <Comment
                      comment={comment}
                    //   onAddComment={() => addNewCommentHandler(comment)}
                    />
                  </div>
                  <div className="mr-2 space-y-3 post-comments__answer sm:mr-8">
                    {comment.answers.map((item, index) => {
                      return (
                        <div key={item._id} className="relative">
                          <div
                            className={classNames(
                              "answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
                              {
                                "last-item":
                                  index + 1 === comment.answers.length,
                              }
                            )}
                          >
                            <Comment comment={item} key={item._id} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostComment;
