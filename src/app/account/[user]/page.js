import { UserProfile } from '@clerk/nextjs'

export default function AccountPage() {
    return (
        <div className="flex justify-center py-20">
            <UserProfile />
        </div>
    );
}