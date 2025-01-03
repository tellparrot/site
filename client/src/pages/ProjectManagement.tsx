import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/useToast";
import { getEpicsAndTasks, createEpicOrTask, deleteEpicOrTask, clearAllEpicsAndTasks } from "@/api/projectManagement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EpicOrTask {
  id: number;
  type: 'epic' | 'task';
  title: string;
  description: string;
}

export default function ProjectManagement() {
  const [items, setItems] = useState<EpicOrTask[]>([]);
  const [newItem, setNewItem] = useState({ type: 'epic', title: '', description: '' });
  const { toast } = useToast();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getEpicsAndTasks();
      setItems(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEpicOrTask(newItem);
      setNewItem({ type: 'epic', title: '', description: '' });
      fetchItems();
      toast({
        title: "Success",
        description: "Item created successfully"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteEpicOrTask(id);
      fetchItems();
      toast({
        title: "Success",
        description: "Item deleted successfully"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  const handleClearAll = async () => {
    try {
      await clearAllEpicsAndTasks();
      fetchItems();
      toast({
        title: "Success",
        description: "All items cleared successfully"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Project Management</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create New Epic or Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label className="block mb-2">Type</label>
              <select
                value={newItem.type}
                onChange={(e) => setNewItem({ ...newItem, type: e.target.value as 'epic' | 'task' })}
                className="w-full p-2 border rounded"
              >
                <option value="epic">Epic</option>
                <option value="task">Task</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Title</label>
              <Input
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <Textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                required
              />
            </div>
            <Button type="submit">Create</Button>
          </form>
        </CardContent>
      </Card>

      <div className="mb-4">
        <Button onClick={handleClearAll} variant="destructive">Clear All</Button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Type:</strong> {item.type}</p>
              <p className="mb-4">{item.description}</p>
              <Button onClick={() => handleDelete(item.id)} variant="destructive">Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}