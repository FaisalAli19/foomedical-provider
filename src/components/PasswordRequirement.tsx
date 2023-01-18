import React from 'react'
import { Text, Image, Box, useMantineTheme } from '@mantine/core';

export function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  const theme = useMantineTheme();
  return (
    <Text color={theme.colors.primary[0]} sx={{ display: 'flex', alignItems: 'center' }} mt={7} size="sm">
      {meets ? <Image src="/images/checked.svg" alt="checked" /> : <Image src="/images/uncheck.svg" alt="uncheck" />} <Box ml={10}>{label}</Box>
    </Text>
  );
}
