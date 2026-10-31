'use client';
import { Table } from '@mantine/core';
import type { Post } from '@/types';

export function DataTable({ posts }: { posts: Post[] }) {
  const rows = posts.map((p) => (
    <Table.Tr key={p.id}>
      <Table.Td ta="left">{p.id}</Table.Td>
      <Table.Td ta="left">{p.title}</Table.Td>
      <Table.Td ta="left">{p.content}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Table.ScrollContainer minWidth={500}>
      <Table striped my="2rem">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Content</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
