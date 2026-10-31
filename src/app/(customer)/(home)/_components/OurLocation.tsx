'use client';

import {
  SimpleGrid,
  Title,
  Group,
  Container,
  Stack,
  Text,
  Anchor,
  Divider,
  Card,
  Box,
} from '@mantine/core';
import {
  MapPinIcon,
  ArrowUpRightIcon,
  PhoneIcon,
  ClockIcon,
} from '@phosphor-icons/react';

export function OurLocation() {
  const contactInfo = [
    {
      icon: <MapPinIcon size={24} />,
      label: 'Address',
      text: `Pendatun Avenue, General Santos City (Dadiangas), South
    Cotabato, 9500`,
      text2: 'Get directions',
      href: 'https://maps.app.goo.gl/4V2nfKwKtWnrrpde8',
    },
    {
      icon: <PhoneIcon size={24} />,
      label: 'Phone',
      text: `(63) 123-456-7890`,
      text2: 'Tap to call',
      href: `tel: +631234567890`,
    },
  ];

  const businessHours = [
    { day: 'Mon - Fri', time: '10:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '11:00 AM - 10:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <section
      aria-labelledby="our-location-heading"
      style={{ background: '#FEFAF3' }}
    >
      <Container py={50}>
        <Title id="our-location-heading" order={3} mb="xl">
          Our Location
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Card shadow="sm">
            <Stack>
              {contactInfo.map((c, index) => (
                <Group key={index} wrap="nowrap" align="flex-start">
                  <Box style={{ flexShrink: 0 }}>{c.icon}</Box>
                  <Stack gap="sm">
                    <Text c="dimmed">{c.label}</Text>
                    <Text>{c.text}</Text>
                    <Anchor
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      underline="hover"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      {c.text2}
                      <ArrowUpRightIcon
                        size={14}
                        weight="bold"
                        aria-hidden="true"
                      />
                    </Anchor>
                  </Stack>
                </Group>
              ))}

              <Divider />

              <Group wrap="nowrap" align="flex-start">
                <ClockIcon size={24} style={{ flexShrink: 0 }} />

                <Stack gap="sm" w="100%">
                  <Text c="dimmed">Opening Hours</Text>
                  {businessHours.map((d, index) => (
                    <Group key={index}>
                      <Text>{d.day}</Text>
                      <Text ml="auto" c="dimmed">
                        {d.time}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Group>
            </Stack>
          </Card>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d495.8870643101371!2d125.170063!3d6.117709!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMDMuOCJOIDEyNcKwMTAnMTIuMiJF!5e0!3m2!1sen!2sph!4v1792561984552!5m2!1sen!2sph"
            style={{
              border: 0,
              borderRadius: '0.5rem',
              width: '100%',
              height: '100%',
              minHeight: 350,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </SimpleGrid>
      </Container>
    </section>
  );
}
