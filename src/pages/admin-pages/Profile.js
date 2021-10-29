import ProfileCard from "../../components/admin-components/profile/ProfileCard";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";

function Profile() {
  const DUMMY_DATA = [
    {
      id: "1",
      name: "Mike's Farm",
      image:
        "https://cib.bnpparibas/app/uploads/sites/2/2018/10/2440-une-left.jpeg",
      description:
        "Mike's Farm is a Vegetables and trees farm that is located at the highlands of North Lebanon. At an altitude of 1800m, with no pollution sources of any kind, Mike's Farm drinks the most clean waters and we emphasise on that by growing our goods organically",
      owner: "Mike Ayoub",
    },
  ];
  return (
    <AdminLayout>
      {DUMMY_DATA.map((profile) => (
        <ProfileCard
          key={profile.id}
          id={profile.id}
          description={profile.description}
          name={profile.name}
          image={profile.image}
          owner={profile.owner}
        />
      ))}
    </AdminLayout>
  );
}

export default Profile;
