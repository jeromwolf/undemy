import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
 

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
     query: { id },
     session: { user }, 
  } = req;

   
  const courses = await client.course.findUnique({
    where: {
        id : Number(id)
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        sections: {
            select: {
              id: true, 
              title: true,
            },
        },
      
        _count: {
            select: {
                favs: true,
                reviews: true,
                sections: true,
            },
          },
       },
    });

    const sections = await client.section.findMany({
        where: {
          courseId: Number(courses?.id),
        },
        include: {
          episodes: {
            select: {
              id: true, 
              title: true,
              videoSrc: true,
              imgSrc: true,
              description: true,
            },
          },
        }
    });

    res.json({ ok: true,
              courses,
              sections  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);