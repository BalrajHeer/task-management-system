import { User } from './User';

export interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate: Date;
  status: string;
  userId: string;
  reviewerId: string;
  createdAt: Date;
  updatedAt: Date;

  user?: User;
  reviewer?: User;
}