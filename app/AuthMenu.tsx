"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthMenu() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <button className="text-sm" onClick={() => signIn()}>로그인</button>
        )
    }
    // TODO : onClick시 로그아웃 모달
    return (
        <div className="flex border-2 cursor-pointer" onClick={() => confirm("로그아웃 하시겠습니까?") && signOut()}>
            <img src={session.user?.image || ""} alt="signed user image" width={28} height={28} />
        </div>
    )
}