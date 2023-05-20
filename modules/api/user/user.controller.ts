import type { NextApiRequest, NextApiResponse } from "next";
import { grantGuestCredential, wrapResponse } from "@/api/helpers";
import { ResponseType, UserApiType } from "@/common/global";

export const loginUserController = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<ResponseType<UserApiType>> => {
  try {
    if (!request.body.username || !request.body.password)
      return wrapResponse({}, "Email/Password are required!");

    return wrapResponse({});
  } catch (e) {
    return wrapResponse(grantGuestCredential(), "Invalid email/password.");
  }
};
