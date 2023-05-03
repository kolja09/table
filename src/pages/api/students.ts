import fs from 'fs';
import path from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';

const readFile = (filePath: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath = path.join(process.cwd(), 'students.json');

  try {
    const studentsData = await readFile(filePath);
    res.status(200).json(studentsData);
  } catch (err) {
    res.status(500).json({ message: 'Error reading file' });
  }
}