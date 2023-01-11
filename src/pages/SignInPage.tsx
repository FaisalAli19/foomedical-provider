import { Text } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SignInForm
      projectId={import.meta.env.VITE_MEDPLUM_PROJECT_ID}
      googleClientId={import.meta.env.VITE_MEDPLUM_GOOGLE_CLIENT_ID}
      onSuccess={() => navigate('/')}
    >
      <Logo size={32} />
      <Text size="lg">Sign in to Foo Provider</Text>
    </SignInForm>
  );
}
