import { Quotes } from "../components/Quotes"
import { Auth } from "../components/Auth"

export const Signin = () => {
    return (
        <div className="grid lg:grid-cols-2 min-h-screen bg-gray-100">

            {/* Left Side */}
            <div className="flex justify-center items-center bg-white px-6">
                <Auth type="signin" />
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex">
                <Quotes />
            </div>

        </div>
    )
}