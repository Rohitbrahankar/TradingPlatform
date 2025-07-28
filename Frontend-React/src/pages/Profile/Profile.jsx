// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { useDispatch, useSelector } from "react-redux";
// import AccountVarificationForm from "./AccountVarificationForm";
// import { VerifiedIcon } from "lucide-react";
// import { enableTwoStepAuthentication, verifyOtp } from "@/Redux/Auth/Action";

// const Profile = () => {
//   const { auth } = useSelector((store) => store);
//   const dispatch = useDispatch();

//   const handleEnableTwoStepVerification =(otp)=>{
//     console.log("EnableTwoStepVerification",otp)
//     dispatch(enableTwoStepAuthentication({jwt:localStorage.getItem("jwt"),otp}))
//   }

//   const handleVerifyOtp=(otp)=>{
//     console.log("otp  - ",otp)
//     dispatch(verifyOtp({jwt:localStorage.getItem("jwt"),otp}))
//   }
//   return (
//     <div className="flex flex-col items-center mb-5 bg-gray-800">
//       <div className="pt-10 w-full lg:w-[60%]">
//         <Card>
//           <CardHeader className="pb-9">
//             <CardTitle>Your Information</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="lg:flex gap-32">
//               <div className="space-y-7">
//                 <div className="flex">
//                   <p className="w-[9rem]">Email : </p>
//                   <p className="text-gray-500">{auth.user?.email} </p>
//                 </div>
//                 <div className="flex">
//                   <p className="w-[9rem]">Full Name : </p>
//                   <p className="text-gray-500">{auth.user?.name} Demo</p>
//                 </div>
//                 <div className="flex">
//                   <p className="w-[9rem]">Date Of Birth : </p>
//                   <p className="text-gray-500">{"25/09/2025"} </p>
//                 </div>
//                 <div className="flex">
//                   <p className="w-[9rem]">Nationality : </p>
//                   <p className="text-gray-500">{"indian"} </p>
//                 </div>
//               </div>
//               <div className="space-y-7">
//                 <div className="flex">
//                   <p className="w-[9rem]">Address : </p>
//                   <p className="text-gray-500">{""}
//                      opposite padole traders
//                       </p>
//                 </div>
//                 <div className="flex">
//                   <p className="w-[9rem]">City : </p>
//                   <p className="text-gray-500">{"pauni"} </p>
//                 </div>
//                 <div className="flex">
//                   <p className="w-[9rem]">Postcode : </p>
//                   <p className="text-gray-500">{441910} </p>
//                 </div>
//                 <div className="flex">
//                   <p className="w-[9rem]">Country : </p>
//                   <p className="text-gray-500">{"india"} </p>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>


//         <div className="mt-6 bg-gray-800">
//         <Card className="w-full">
//             <CardHeader className="pb-7">
//               <div className="flex items-center gap-3">
//                 <CardTitle>2 Step Verification</CardTitle>

//                 {auth.user.twoFactorAuth?.enabled ? (
//                   // <Badge className="space-x-2 text-white bg-green-600">
//                   //   <VerifiedIcon /> <span>{"Enabled"}</span>
//                   // </Badge>
//                   <Badge className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">
//                     <VerifiedIcon className="w-4 h-4" />
//                     <span>Enabled</span>
//                   </Badge>
//                 ) : (
//                   <Badge className="bg-orange-500">Disabled</Badge>
//                 )}
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-5">
              
//               <div>
//                 <Dialog>
//                   <DialogTrigger>
//                     <Button>Enabled Two Step Verification</Button>
//                   </DialogTrigger>
//                   <DialogContent className="">
//                     <DialogHeader className="">
//                       <DialogTitle className="px-10 pt-5 text-center">
//                         verify your account
//                       </DialogTitle>
//                     </DialogHeader>
//                     <AccountVarificationForm handleSubmit={handleEnableTwoStepVerification} />
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default Profile;


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import AccountVarificationForm from "./AccountVarificationForm";
import { VerifiedIcon } from "lucide-react";
import { enableTwoStepAuthentication, verifyOtp } from "@/Redux/Auth/Action";

const Profile = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleEnableTwoStepVerification = (otp) => {
    console.log("EnableTwoStepVerification", otp);
    dispatch(enableTwoStepAuthentication({ jwt: localStorage.getItem("jwt"), otp }));
  };

  const handleVerifyOtp = (otp) => {
    console.log("otp  - ", otp);
    dispatch(verifyOtp({ jwt: localStorage.getItem("jwt"), otp }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center mb-5 bg-gray-800">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email :</p>
                  <p className="text-gray-500">{auth.user?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name :</p>
                  <p className="text-gray-500">{auth.user?.fullName} </p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date Of Birth :</p>
                  <p className="text-gray-500">25/09/2025</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality :</p>
                  <p className="text-gray-500">indian</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Address :</p>
                  <p className="text-gray-500">opposite padole traders</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">City :</p>
                  <p className="text-gray-500">pauni</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Postcode :</p>
                  <p className="text-gray-500">441910</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Country :</p>
                  <p className="text-gray-500">india</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {auth.user.twoFactorAuth?.enabled ? (
                  <Badge className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">
                    <VerifiedIcon className="w-4 h-4" />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <Dialog>
                <DialogTrigger>
                  <Button>Enable Two Step Verification</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="px-10 pt-5 text-center">
                      Verify Your Account
                    </DialogTitle>
                  </DialogHeader>
                  <AccountVarificationForm handleSubmit={handleEnableTwoStepVerification} />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
