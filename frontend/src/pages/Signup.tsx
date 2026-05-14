import { Quotes } from "../components/Quotes"
import { Auth } from "../components/Auth"

export const Signup = () => {
    return (

        <div className="grid lg:grid-cols-2 min-h-screen bg-gray-100">

            {/* Left Side */}
            <div className="flex justify-center items-center bg-white px-6">
                <Auth type="signup" />
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex">
                <Quotes />
            </div>

        </div>
    )
}