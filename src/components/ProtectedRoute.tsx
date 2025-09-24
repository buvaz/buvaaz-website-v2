import api from "@/api/api";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const sessionId = localStorage.getItem("sessionId");
  api.get(`/guest-session/verifySessionId/${sessionId}`)
  .then((res)=>{
    if(res.status == 200){
        if((res.data as any).data == false){
            return <Navigate to="/" replace />;
        }
    }
  });

  return children;
}
