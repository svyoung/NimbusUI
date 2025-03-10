"use client";

import { useState } from "react";
import OrderSummary from "@/app/components/OrderSummary";
import styles from "./styles.module.scss"

const OrderSummaryPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const data = {
        items: [
            {
                name: "Black Shoes",
                quantity: 2,
                price: 14.59
            },
            {
                name: "Red Sandals",
                quantity: 1,
                price: 4.55
            },
        ],
        created_date: "",
        tax_precentage: 9,
        discounts: [
            {
                percentage: 10
            },
            {
                percentage: 2
            }
        ],
    }
    return (
        <div>
            <h1>Order Summary</h1>

            <p>
                The Order Summary component is a key part of the eCommerce checkout experience, providing customers with a clear breakdown of their purchase before completing the transaction. It displays a list of selected items along with their quantity, individual price, and subtotal. Additionally, it includes applied discounts, taxes, and the final total amount. This component ensures transparency by summarizing all costs, helping users review their order details before proceeding with payment.
            </p>
            
            <div>
                <OrderSummary data={data} title="Order Summary Title" />
            </div>           
        </div>
    )
}

export default OrderSummaryPage;