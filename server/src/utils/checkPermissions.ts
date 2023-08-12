import { UnAuthenticatedError } from '../errors';

const checkPermissions = (
  requestUser: { userId: string },
  resourceUserId: string,
) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnAuthenticatedError('Not authorized to access this route');
};

export default checkPermissions;
