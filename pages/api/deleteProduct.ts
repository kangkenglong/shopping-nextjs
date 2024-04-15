import type { NextApiRequest, NextApiResponse } from "next";
import type { ResponseAPIGetShoppingCartInfo } from "@/mockAPI/types";
import { mockShoppingCartInfo } from "@/mockAPI/mockData";

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseAPIGetShoppingCartInfo | {[error: string]: string}>) {
    const {
        query
    } = req;

    try {
        const data = mockShoppingCartInfo.filter(({productId}) => productId !== query.productId);

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ 'error': 'failed to fetch data'});
    }
}