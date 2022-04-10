import Link from "next/link" 
import Head from "next/head"
export default function Header(props) {

    return (
        <header className="flex items-center justify-between p-4 bg-emerald-500 text-black-50">
            <h1 className="text-4xl">Cookie Stand Admin</h1>
        </header>
    )

}