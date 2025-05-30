
import React from 'react';
import { ReadingMaterial } from '@/types/course';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CourseReadingMaterialsPanelProps {
  materials: ReadingMaterial[];
}

const CourseReadingMaterialsPanel = ({ materials = [] }: CourseReadingMaterialsPanelProps) => {
  if (materials.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">No reading materials available</h3>
        <p className="text-gray-500">This course doesn't have any reading materials yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
        <FileText className="mr-2" />
        Reading Materials
      </h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Est. Reading Time</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materials.map((material) => (
            <TableRow key={material.id}>
              <TableCell className="font-medium">{material.title}</TableCell>
              <TableCell>{material.author}</TableCell>
              <TableCell>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  material.type === 'pdf' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {material.type.toUpperCase()}
                </span>
              </TableCell>
              <TableCell>{material.estimatedReadTime}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  <FileText className="h-4 w-4 mr-1" /> Read
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseReadingMaterialsPanel;
