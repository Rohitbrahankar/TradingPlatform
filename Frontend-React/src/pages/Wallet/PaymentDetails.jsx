// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import PaymentDetailsForm from "./PaymentDetailsForm";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getPaymentDetails } from "@/Redux/Withdrawal/Action";
// import { maskAccountNumber } from "@/Util/maskAccountNumber";

// const PaymentDetails = () => {
//   const dispatch = useDispatch();
//   const { withdrawal } = useSelector((store) => store);

//   useEffect(() => {
//     dispatch(getPaymentDetails({ jwt: localStorage.getItem("jwt") }));
//   }, []);

//   return (
//     <div className="px-20 ">
//       <h1 className="text-3xl font-bold py-10">Payment Details</h1>
//       {withdrawal.paymentDetails ? (
//         <Card className="mb-10">
//           <CardHeader>
//             <CardTitle>
//               {withdrawal.paymentDetails?.bankName.toUpperCase()}
//             </CardTitle>
//             <CardDescription>
//               A/C No:{" "}
//               {maskAccountNumber(withdrawal.paymentDetails?.accountNumber)}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex items-center">
//               <p className="w-32">A/C Holder</p>
//               <p className="text-gray-400">
//                 : {withdrawal.paymentDetails.accountHolderName}
//               </p>
//             </div>
//             <div className="flex items-center">
//               <p className="w-32">IFSC</p>
//               <p className="text-gray-400">
//                 : {withdrawal.paymentDetails.ifsc.toUpperCase()}
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       ) : (
//         <Dialog>
//           <DialogTrigger>
//             <Button className="py-6">Add Payment Details</Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader className="pb-5">
//               <DialogTitle>Payment Details</DialogTitle>
//             </DialogHeader>
//             <PaymentDetailsForm />
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default PaymentDetails;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaymentDetailsForm from "./PaymentDetailsForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPaymentDetails } from "@/Redux/Withdrawal/Action";
import { maskAccountNumber } from "@/Util/maskAccountNumber";

const PaymentDetails = () => {
  const dispatch = useDispatch();
  const { withdrawal } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getPaymentDetails({ jwt: localStorage.getItem("jwt") }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 px-5 lg:px-20 py-10 text-white">
      <h1 className="text-3xl font-bold pb-10">Payment Details</h1>
      {withdrawal.paymentDetails ? (
        <Card className="mb-10 bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>
              {withdrawal.paymentDetails?.bankName.toUpperCase()}
            </CardTitle>
            <CardDescription className="text-gray-400">
              A/C No: {maskAccountNumber(withdrawal.paymentDetails?.accountNumber)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center py-1">
              <p className="w-32 text-gray-300">A/C Holder</p>
              <p className="text-white">
                : {withdrawal.paymentDetails.accountHolderName}
              </p>
            </div>
            <div className="flex items-center py-1">
              <p className="w-32 text-gray-300">IFSC</p>
              <p className="text-white">
                : {withdrawal.paymentDetails.ifsc.toUpperCase()}
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Dialog>
          <DialogTrigger>
            <Button className="py-6">Add Payment Details</Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader className="pb-5">
              <DialogTitle>Payment Details</DialogTitle>
            </DialogHeader>
            <PaymentDetailsForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PaymentDetails;
