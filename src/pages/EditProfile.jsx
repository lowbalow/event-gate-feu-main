import Input from "../components/form/Input";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import SignUpIcon from "../components/icons/SignUpIcon";
import SendIcon from "../components/icons/SendIcon";
import supabase from "../utils/supabase";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { SessionContext } from "../Context/SessionContext";

const EditProfile = () => {
	const session = useContext(SessionContext);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const signupForm = {
			firstname: formData.get("firstname"),
			lastname: formData.get("lastname"),
			email: formData.get("email"),
			password: formData.get("password"),
		};
		
		const { data, ProfileData, error: ProfileError } = await supabase.auth.update(
			{
				firstname: signupForm.firstname,
				lastname: signupForm.lastname,
				email: signupForm.email,
				password: signupForm.password,
			});

			if (profileError) alert(profileError);
	};

	return (
		<MainLayout>
			<div className="min-h-screen flex flex-col">
				<div className="flex justify-center items-center flex-1">
					<Card>
						<h1 className="text-xl font-bold">Sign Up</h1>
						<form onSubmit={handleSubmit}>
							<Input
								name="firstname"
								placeholder="Enter your First Name"
								label="Firstname"
								type="text"
							/>
							<Input
								name="lastname"
								placeholder="Enter your Last Name"
								label="Lastname"
								type="text"
							/>
							<Input
								name="email"
								placeholder="Enter your Email"
								label="Email"
								type="email"
							/>
							<button className="btn btn-primary rounded-full mt-5">
								<SendIcon className="text-sm" /> Submit
							</button>
						</form>
					</Card>
				</div>
			</div>
		</MainLayout>
		);
	};
export default EditProfile;