import { Input } from "@/components/ui/input";
// import "./Login.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/Redux/Auth/Action";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import SpinnerBackdrop from "@/components/custome/SpinnerBackdrop";
// import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    data.navigate = navigate;
    dispatch(login(data));
    console.log("login form", data);
  };
  return (
    <div className="space-y-5">
      <h1 className="text-center text-xl">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="enter your email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password" // Added password field
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password" // Added type attribute for password input
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!auth.loading ? (
            <Button type="submit" className="w-full  py-5">
              Login
            </Button>
          ) : (
            <SpinnerBackdrop show={true} />
          )}
        </form>
      </Form>

      {/* {toast({
        title: "Scheduled: Catch up ",
        description: "Friday, February 10, 2023 at 5:57 PM",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      })} */}
    </div>
  );
};

export default LoginForm;


// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "@/Redux/Auth/Action";
// import { useNavigate } from "react-router-dom";
// import SpinnerBackdrop from "@/components/custome/SpinnerBackdrop";
// import { useToast } from "@/components/ui/use-toast";

// const formSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(8, "Password must be at least 8 characters long"),
// });

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { auth } = useSelector((store) => store);
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data) => {
//     data.navigate = navigate;
//     dispatch(login(data));
//     console.log("login form", data);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#25252b] relative overflow-hidden">
//       {/* Background Animation Layer */}
//       <div className="absolute w-[380px] h-[420px] animate-spin-slow rounded-2xl bg-[conic-gradient(from_var(--a),#ff2770_0%,#ff2770_5%,transparent_5%,transparent_40%,#ff2770_50%)] shadow-[0_15px_50px_#000000]">
//         {/* Second rotating layer */}
//         <div className="absolute w-full h-full rounded-2xl bg-[conic-gradient(from_var(--a),#45f3ff_0%,#45f3ff_5%,transparent_5%,transparent_40%,#45f3ff_50%)] animate-spin-slower delay-1000" />
//         {/* Inner box layer */}
//         <div className="absolute inset-1 rounded-xl bg-[#2d2d39] border-4 border-[#25252b] z-0"></div>
//       </div>

//       {/* Login Form Layer */}
//       <div className="absolute w-[360px] p-10 bg-black/20 rounded-xl shadow-inner backdrop-blur-sm border-b border-white/30 z-10">
//         <h1 className="text-white text-2xl text-center mb-6 font-semibold">
//           Login
//         </h1>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             {/* Email Field */}
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-md"
//                       placeholder="Enter your email"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-400 text-sm mt-1" />
//                 </FormItem>
//               )}
//             />
//             {/* Password Field */}
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="password"
//                       className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-md"
//                       placeholder="Enter your password"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-400 text-sm mt-1" />
//                 </FormItem>
//               )}
//             />

//             {/* Submit Button or Spinner */}
//             {!auth.loading ? (
//               <Button
//                 type="submit"
//                 className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold"
//               >
//                 Login
//               </Button>
//             ) : (
//               <SpinnerBackdrop show={true} />
//             )}
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
