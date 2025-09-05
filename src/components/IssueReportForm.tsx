import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  MapPin, 
  Upload, 
  Send,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const IssueReportForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
    location: '',
    image: null as File | null
  });

  const categories = [
    { value: 'roads', label: 'Roads & Transportation' },
    { value: 'sanitation', label: 'Sanitation & Waste' },
    { value: 'water', label: 'Water Supply' },
    { value: 'electrical', label: 'Electrical & Lighting' },
    { value: 'drainage', label: 'Drainage & Sewage' },
    { value: 'infrastructure', label: 'Public Infrastructure' },
    { value: 'safety', label: 'Public Safety' },
    { value: 'other', label: 'Other' }
  ];

  const priorities = [
    { value: 'low', label: 'Low Priority', color: 'bg-muted' },
    { value: 'medium', label: 'Medium Priority', color: 'bg-primary' },
    { value: 'high', label: 'High Priority', color: 'bg-warning' },
    { value: 'urgent', label: 'Urgent', color: 'bg-urgent' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({ 
            ...prev, 
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}` 
          }));
          toast({
            title: "Location captured",
            description: "GPS coordinates have been added to your report.",
          });
        },
        (error) => {
          toast({
            title: "Location error",
            description: "Could not get your current location. Please enter manually.",
            variant: "destructive"
          });
        }
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Issue reported successfully!",
        description: "Your issue has been submitted and assigned ID #ISS-" + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
      });
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: '',
        priority: '',
        location: '',
        image: null
      });
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-primary" />
            Report a Civic Issue
          </CardTitle>
          <CardDescription>
            Help make your city better by reporting issues that need attention from local authorities.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Issue Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Issue Title *</Label>
              <Input
                id="title"
                placeholder="Brief description of the issue"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                required
              />
            </div>

            {/* Category and Priority */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level *</Label>
                <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.map((priority) => (
                      <SelectItem key={priority.value} value={priority.value}>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${priority.color}`} />
                          {priority.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Detailed Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe the issue in detail, including when you noticed it and any other relevant information..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <div className="flex gap-2">
                <Input
                  id="location"
                  placeholder="Enter address or landmark"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  required
                  className="flex-1"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={getCurrentLocation}
                  className="px-3"
                >
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Click the location icon to auto-detect your current position
              </p>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image">Upload Photo (Optional)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="image" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    {formData.image ? (
                      <>
                        <CheckCircle className="h-8 w-8 text-success" />
                        <p className="text-sm font-medium">Image uploaded: {formData.image.name}</p>
                        <p className="text-xs text-muted-foreground">Click to change</p>
                      </>
                    ) : (
                      <>
                        <Camera className="h-8 w-8 text-muted-foreground" />
                        <p className="text-sm font-medium">Upload a photo of the issue</p>
                        <p className="text-xs text-muted-foreground">JPG, PNG up to 10MB</p>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Selected values preview */}
            {(formData.category || formData.priority) && (
              <div className="flex flex-wrap gap-2">
                {formData.category && (
                  <Badge variant="secondary">
                    {categories.find(c => c.value === formData.category)?.label}
                  </Badge>
                )}
                {formData.priority && (
                  <Badge className={priorities.find(p => p.value === formData.priority)?.color}>
                    {priorities.find(p => p.value === formData.priority)?.label}
                  </Badge>
                )}
              </div>
            )}

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Upload className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Issue Report
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              What happens next?
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Your report gets a unique tracking ID</li>
              <li>• Automatically assigned to relevant department</li>
              <li>• You'll receive status updates via notifications</li>
              <li>• Track progress in real-time</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-warning" />
              Emergency Issues
            </h4>
            <p className="text-sm text-muted-foreground">
              For urgent matters that require immediate attention (gas leaks, major accidents, etc.), 
              please call emergency services directly: <strong>100</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IssueReportForm;