import axios from "axios";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
export default async function Home() {
    const response = await axiosInstance({
        url: "http://localhost:3000/api/orders",
        method: "get",
    });
    const orders = response.data.orders;

    // try {
    //     // const sessionCookie = cookies().get("session");
    //     // const response = await axios.get("http://localhost:3000/api/orders", {
    //     //     headers: {
    //     //         Cookie: `session=${sessionCookie.value}`,
    //     //     },
    //     // });
    //     const response = await axiosInstance({
    //         url: "http://localhost:3000/api/orders",
    //         method: "get",
    //     });
    //     orders = response.data.orders;
    // } catch (error) {
    //     orders = [];
    // }

    return (
        <main className="container mx-auto max-w-[800px]">
            <div id="orders-container">
                <strong>Orders</strong>
                <p>Recent orders from your store.</p>

                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.$id}>
                                <td className="flex flex-col">
                                    <strong>{order.customer}</strong>
                                    <p>{order.customer_email}</p>
                                </td>
                                <td>{order.status}</td>
                                <td>{order.type}</td>
                                <td>${order.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
