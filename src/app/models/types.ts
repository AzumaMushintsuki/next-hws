import {IUser} from "@/app/models/IUser";
import {IComment} from "@/app/models/IComment";
import {IPost} from "@/app/models/IPost";

export type Params = { id: string };
export type UsersType = {users: IUser[] };
export type UserType = {user:IUser};
export type PostsType = {posts: IPost[] };
export type PostType = {post:IPost};
export type CommentsType = {comments: IComment[] };
export type CommentType = {comment:IComment};