import { useDispatch } from "react-redux";
import { updateProfile } from "../utils/ProfileSlice";

export const Data=async(email1:String,password1:String)=>{ 
    const dispatch = useDispatch();

    const handleUpdate = (field: string, value: any) => {
        dispatch(updateProfile({ field, value }));
    };
/*
    const fetchData = async () => {
        try {
            //const response = await fetch("your-api-url");
            //const data = await response.json();
*/
            // Assuming the API response contains the phone number, email, and password
            const data = {
                name: "John Doe",
                phone: "1234567890",
                email: "example@example.com",
                password: "password123",
                pic: "https://example.com/profile-pic.jpg"
            };

            const { phone, email, password,pic,name } = data;

            handleUpdate("phone", phone);
            handleUpdate("email", email);
            handleUpdate("password", password);
            handleUpdate("pic", pic
            );
            handleUpdate("name", name);
            
            console.log("Data fetched successfully:", data);
        } /*catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return null; // or your JSX component
}*/