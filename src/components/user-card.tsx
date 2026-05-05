interface UserCardProps {
    name: string;
    email: string;
    age: number;
    role: string;
    status: string;
    bio: string;
    skills: string[];
    projects: string[];
    experience: string[];
}

export function UserCard({name, experience, email, age, role, status, bio, skills, projects}: UserCardProps) {
    return (
        <div onClick={() => alert('User card clicked!')}>
            <h1>User Card</h1>
            <p>This is the user card component.</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
            <p>Status: {status}</p>
            <p>Bio: {bio}</p>
            <p>Skills: {skills.join(', ')}</p>
            <p>Projects: {projects.join(', ')}</p>
            <p>Experience: {experience.join(', ')}</p>
        </div>
    );
}