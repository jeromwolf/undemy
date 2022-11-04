import withHandler , { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "../../../libs/server/withSession";


async function handler(req: NextApiRequest,res: NextApiResponse<ResponseType>) {
    console.log(req.session.user);


    const courses = await client.course.findMany({
      take: 100,
      skip: 0,
    });
    res.json({ ok: true, courses });
}

export default withApiSession(
    withHandler({methods: ["GET"], handler, isPrivate: false })
);