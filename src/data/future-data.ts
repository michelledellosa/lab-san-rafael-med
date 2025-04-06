import FutureIconFour from "@/svg/FutureIconFour";
import FutureIconOne from "@/svg/FutureIconOne";
import FutureIconThree from "@/svg/FutureIconThree";
import FutureIconTwo from "@/svg/FutureIconTwo";

interface FutureProductType {
    id: number,
    title: string;
    icon: () => JSX.Element,
    desc: string
}

const future_data: FutureProductType[] = [
    {
        id: 1,
        title: "Free Shipping",
        icon: FutureIconOne,
        desc: "On All Order Over $599"
    },
    {
        id: 2,
        title: "Easy Returns",
        icon: FutureIconTwo,
        desc: "30 Day Returns Policy"
    },
    {
        id: 3,
        title: "Secure Payment",
        icon: FutureIconThree,
        desc: "100% Secure Gaurantee"
    },
    {
        id: 4,
        title: "Special Support",
        icon: FutureIconFour,
        desc: "24/7 Dedicated Support"
    },
]
export default future_data;