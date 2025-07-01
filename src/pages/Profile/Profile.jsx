"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { LogOut, User, Mail, Building, Store, Hash, Users, CheckCircle, UserCheck } from "lucide-react"
import { useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom"

const Profile = () => {
    const userData = useSelector((state) => state.auth.user);
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("isEmployee");
        localStorage.removeItem("token");
        localStorage.removeItem("user");


        setTimeout(() => {
            navigate("/login");
        }, 0);
    };

    const getStatusColor = () => {
        switch (status.toLowerCase()) {
            case "activated":
                return "bg-green-100 text-green-800 hover:bg-green-100"
            case "pending":
                return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
            case "deactivated":
                return "bg-red-100 text-red-800 hover:bg-red-100"
            default:
                return "bg-gray-100 text-gray-800 hover:bg-gray-100"
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">

                <Card className=" p-7 flex flex-row items-center justify-between space-y-0 pb-6 bg-white border-b">
                    <div>
                        <CardTitle className="text-3xl font-bold">Profile Dashboard</CardTitle>
                        <p className="text-muted-foreground mt-1">Manage your account information</p>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-transparent"
                    >
                        <LogOut className="h-5 w-5" />
                        Logout
                    </Button>
                </Card>

                <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Basic Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border">
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Basic Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <User className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Name</p>
                                            <p className="text-xl font-semibold text-gray-900">{userData.name}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Email</p>
                                            <p className="text-lg text-gray-900">{userData.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <Hash className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">User ID</p>
                                            <p className="text-lg text-gray-900">{userData.id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Card */}
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Account Status</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-sm font-medium text-gray-600">Status</span>
                                        </div>
                                        <Badge className={getStatusColor(userData.status)}>{userData.status}</Badge>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <UserCheck className="h-5 w-5 text-purple-600" />
                                            <span className="text-sm font-medium text-gray-600">Influencer</span>
                                        </div>
                                        <Badge variant={userData.is_influencer ? "default" : "secondary"}>
                                            {userData.is_influencer ? "Yes" : "No"}
                                        </Badge>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Users className="h-5 w-5 text-orange-600" />
                                            <span className="text-sm font-medium text-gray-600">Referral</span>
                                        </div>
                                        <Badge variant="outline">{userData.referral}</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Organization & Roles */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Roles Section */}
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Roles & Permissions</h3>
                                <div className="flex flex-wrap gap-3">
                                    {userData.roles.map((role, index) => (
                                        <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                                            {role}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Organization Info */}
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Organization Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-green-100 rounded-full">
                                            <Building className="h-6 w-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Organization ID</p>
                                            <p className="text-2xl font-bold text-gray-900">{userData.organization_id}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-purple-100 rounded-full">
                                            <Store className="h-6 w-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Shop ID</p>
                                            <p className="text-2xl font-bold text-gray-900">{userData.shop_id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Addresses Section */}
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Addresses</h3>
                                {userData.addresses.length > 0 ? (
                                    <div className="space-y-3">
                                        {userData.addresses.map((address, index) => (
                                            <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                                                <p className="text-gray-900">{address}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="p-3 bg-gray-100 rounded-full w-fit mx-auto mb-3">
                                            <Building className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <p className="text-gray-500 text-sm">No addresses added yet</p>
                                        <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                                            Add Address
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>

            </div>
        </div>
    )
}

export default Profile
