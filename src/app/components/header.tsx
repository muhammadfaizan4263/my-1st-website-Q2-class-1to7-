import Link from "next/link";
import React from "react";

export function Header() {
    return (
        <header style={{ backgroundColor: 'green', padding: '10px', display: 'flex', alignItems: 'center' }}>
        <img src="/atomic.jpg" alt="Logo" style={{ height: '80px', marginRight: '3px' }} />
        <nav>

                <Link href="/" style={{ fontWeight: "medium", display: 'inline-block', padding: '1px', margin: '5px' }}>
                    Home
                </Link>
                <Link href="/components/about" style={{ display: 'inline-block', padding: '10px', margin: '5px' }}>
                    About
                </Link>
                <Link href="/components/contact" style={{ display: 'inline-block', padding: '10px', margin: '5px' }}>
                    Contact
                </Link>
            </nav>
        </header>
    );
}

export default Header;
