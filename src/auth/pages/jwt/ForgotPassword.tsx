import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            setMessage('If an account exists with this email, you will receive a password reset link.');
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50/50 px-4">
            <div className="w-full max-w-[440px] space-y-6 rounded-xl bg-card p-8 shadow-sm border border-border">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-primary">
                        Your Email
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to reset password
                    </p>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {message && (
                        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-700 font-medium">
                            {message}
                        </div>
                    )}
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="email@email.com"
                            className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center whitespace-nowrap w-full h-11 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                        {loading ? 'Sending...' : 'Continue'}
                    </button>

                    <div className="text-center">
                        <Link to="/auth/login" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2">
                            <span>←</span> Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
