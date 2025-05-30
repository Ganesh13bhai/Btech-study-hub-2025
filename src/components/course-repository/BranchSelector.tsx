
import React from 'react';
import { difficultyLevels } from './CourseData';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface BranchSelectorProps {
  branches: string[];
  selectedBranch: string;
  setSelectedBranch: (branch: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
}

const BranchSelector = ({ 
  branches, 
  selectedBranch, 
  setSelectedBranch, 
  selectedDifficulty, 
  setSelectedDifficulty 
}: BranchSelectorProps) => {
  return (
    <div className="md:col-span-1 bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-4 text-gray-900">Browse by Branch</h3>
      <ul className="space-y-2 mb-6">
        {branches.map((branch) => (
          <li key={branch}>
            <button
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                selectedBranch === branch
                  ? 'bg-btech-purple text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedBranch(branch)}
            >
              {branch}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="border-t border-gray-200 pt-4">
        <h3 className="font-semibold text-lg mb-3 text-gray-900">Filter by Difficulty</h3>
        <RadioGroup 
          value={selectedDifficulty} 
          onValueChange={setSelectedDifficulty}
          className="space-y-3"
        >
          {difficultyLevels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem value={level} id={`difficulty-${level}`} />
              <Label htmlFor={`difficulty-${level}`} className="cursor-pointer">
                {level}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default BranchSelector;
