import React from 'react'

const Foot = () => {
    return (
        <div className='relative bottom-0 text-center w-[100%] font-bold'>
            <footer className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-3'>
                <p>&copy; 2024 d-Planner: Plan Your Day . All rights reserved.</p>
                <p>Version 1.0.0</p>    
                </div>
                
                <p className='flex gap-3'>
                    <a href="/privacy-policy">Privacy Policy</a> |
                    <a href="/terms-of-service">Terms of Service</a> |
                    <a href="/about">About</a>
                </p>
                <p>Contact us: <a href="mailto:annanyadevi18@gmail.com">annanyadevi18@gmail.com</a></p>
                
            </footer>

        </div>
    )
}

export default Foot
