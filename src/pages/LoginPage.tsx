import type React from 'react';

import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useAuthLogic } from '../hooks/useAuthLogic';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, loadingLogin } = useAuthLogic();
  const navigate = useNavigate();

  const onNavigateToRegister = () => {
    navigate('/register');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    loginUser(email, password);
  };

  return (
    <div className="min-h-screen bg-bg-1 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-bg-2">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-gray-100">Iniciar Sesión</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Ingresa tus credenciales para acceder a tu cuenta
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-primary-normal focus:ring-primary-normal pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? <EyeSlashIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loadingLogin}>
              {loadingLogin ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-400">¿No tienes una cuenta? </span>
              <button
                type="button"
                onClick={onNavigateToRegister}
                className="text-primary-light hover:text-blue-300 underline font-medium"
              >
                Register
              </button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
