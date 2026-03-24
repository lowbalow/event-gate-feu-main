import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import supabase from "../utils/supabase";


const Profile = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase.from("profiles").select();
      if (error) alert(error);
      if (data) console.log("data", data);
    };

    fetchProfile();
  }, []);

  return <MainLayout>This is the profile page</MainLayout>;
};

export default Profile;