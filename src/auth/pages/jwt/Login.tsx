import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../useAuthContext';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50/50 px-4">
            <div className="w-full max-w-[440px] space-y-6 rounded-xl bg-card p-8 shadow-sm border border-border">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-primary">
                        Sign in
                    </h2>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {error && (
                        <div className="rounded-lg bg-destructive/15 p-3 text-sm text-destructive font-medium">
                            {error}
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
                            placeholder="Enter email"
                            className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-foreground">
                                Password
                            </label>
                            <Link
                                to="/auth/forgot-password"
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="current-password"
                                required
                                placeholder="Enter Password"
                                className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" aria-hidden="true" />
                                ) : (
                                    <Eye className="h-4 w-4" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                        />
                        <label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                        >
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center whitespace-nowrap w-full h-11 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
