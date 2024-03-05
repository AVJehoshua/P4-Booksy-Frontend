// orderService.js
const backendUrl = "http://127.0.0.1:3000";

export const createOrderRecord = async (orderDetails) => {
    try {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderDetails)
        };

        const response = await fetch(`${backendUrl}/order/create`, requestOptions);
        if (!response.ok) {
            throw new Error(`Error creating order record: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Create order record error:", error.message);
        throw error;
    }
};

