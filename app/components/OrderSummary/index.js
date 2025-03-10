import { formatCurrency, getSubPriceTotal, getTotalDiscountPercentages, calculateDiscounts, getPriceTotal } from "@/utils/helpers";
import styles from "./styles.module.scss"

const OrderSummary = ({ data, title }) => {
    if(!data) return;
    return (
        <>
            <div className={styles["order-summary-wrapper"]}>
                <h3>{title}</h3>
                <div className={styles["order-summary-itemized"]}>
                    <div className={styles["itemized-group"]}>
                        <div className={styles["order-summary-itemized-column"]}>
                            <div><strong>Product</strong></div>
                            <div><strong>Price</strong></div>
                        </div>
                        {data.items.map(item => (
                            <div key={`itemized-column-${item.name}`} className={styles["order-summary-itemized-column"]}>
                                <div className={styles["item-cell"]} key={item.name} >
                                    {item.name} <br />
                                    <span className={styles["quantity-label"]}>Qty: {item.quantity}</span>
                                </div>
                                <div className={styles["price-cell"]} key={item.price}>
                                    {formatCurrency(item.price)}
                                </div>
                            </div>
                            
                        ))}
                    </div>
                    <div className={styles["order-total-group"]}>
                        <div className={styles["order-total"]}>
                            <div><strong>Subtotal</strong></div>
                            <div>{formatCurrency(getSubPriceTotal(data.items))}</div>
                        </div>
                        {data.discounts &&
                            <div className={`${styles["order-total"]} ${styles["order-discount"]}`}>
                                <div>
                                    <strong>Discounts</strong> <br />
                                    <span>({getTotalDiscountPercentages(data.discounts)}%)</span>
                                </div>
                                <div>- {formatCurrency(calculateDiscounts(data.discounts, getSubPriceTotal(data.items)))}</div>
                            </div>
                        }
                        <div className={`${styles["order-total"]} ${styles["order-final-total"]}`}>
                            <div><strong>Total</strong></div>
                            <div>{formatCurrency(getPriceTotal(data.items, data.tax_precentage, data.discount))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary;