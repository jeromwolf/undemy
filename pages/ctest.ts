import { NextApiRequest, NextApiResponse } from "next";

export default function chandler(
    req:NextApiRequest, res:NextApiResponse
) {
    res.json({
        ok: true,
        data: "xx"
    })
}