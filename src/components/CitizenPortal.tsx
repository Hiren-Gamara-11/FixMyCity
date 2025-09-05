import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus,
  Search,
  Clock,
  CheckCircle,
  AlertTriangle,
  MapPin,
  Heart,
  MessageSquare,
  TrendingUp,
  Filter,
  Camera
} from 'lucide-react';

interface Issue {
  id: string;
  title: string;
  location: string;
  status: 'submitted' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  timestamp: string;
  category: string;
  upvotes: number;
  isUpvoted: boolean;
  description: string;
}

const CitizenPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample user's issues
  const myIssues: Issue[] = [
    {
      id: 'ISS-001',
      title: 'Pothole on MG Road needs urgent repair',
      location: 'MG Road, Sector 14',
      status: 'in-progress',
      priority: 'high',
      timestamp: '2 days ago',
      category: 'Roads',
      upvotes: 23,
      isUpvoted: true,
      description: 'Large pothole causing traffic issues and potential vehicle damage'
    },
    {
      id: 'ISS-008',
      title: 'Broken streetlight in residential area',
      location: 'Maple Street, Sector 7',
      status: 'resolved',
      priority: 'medium',
      timestamp: '1 week ago',
      category: 'Infrastructure',
      upvotes: 8,
      isUpvoted: false,
      description: 'Streetlight has been non-functional for several days'
    }
  ];

  // Sample nearby issues
  const nearbyIssues: Issue[] = [
    {
      id: 'ISS-015',
      title: 'Garbage collection missed for 3 days',
      location: 'Green Valley, Sector 12',
      status: 'submitted',
      priority: 'high',
      timestamp: '4 hours ago',
      category: 'Sanitation',
      upvotes: 45,
      isUpvoted: false,
      description: 'Waste accumulation causing hygiene issues'
    },
    {
      id: 'ISS-016',
      title: 'Water supply disruption in morning hours',
      location: 'Blue Hills, Sector 9',
      status: 'in-progress',
      priority: 'medium',
      timestamp: '1 day ago',
      category: 'Water Supply',
      upvotes: 12,
      isUpvoted: true,
      description: 'Intermittent water supply between 6 AM - 10 AM daily'
    },
    {
      id: 'ISS-017',
      title: 'Traffic signal malfunction at main intersection',
      location: 'Main Road & Park Street Junction',
      status: 'submitted',
      priority: 'urgent',
      timestamp: '6 hours ago',
      category: 'Infrastructure',
      upvotes: 67,
      isUpvoted: false,
      description: 'Traffic light stuck on red, causing major traffic backup'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted': return <Clock className="h-4 w-4" />;
      case 'in-progress': return <AlertTriangle className="h-4 w-4" />;
      case 'resolved': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-warning text-warning-foreground';
      case 'in-progress': return 'bg-primary text-primary-foreground';
      case 'resolved': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-urgent text-urgent-foreground';
      case 'high': return 'bg-warning text-warning-foreground';
      case 'medium': return 'bg-primary text-primary-foreground';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const IssueCard = ({ issue, showUpvote = true }: { issue: Issue, showUpvote?: boolean }) => (
    <Card className="shadow-card hover:shadow-elegant transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs">
              {issue.id}
            </Badge>
            <Badge className={getStatusColor(issue.status)}>
              {getStatusIcon(issue.status)}
              <span className="ml-1 capitalize">{issue.status.replace('-', ' ')}</span>
            </Badge>
            <Badge className={getPriorityColor(issue.priority)} variant="secondary">
              {issue.priority}
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground">{issue.timestamp}</div>
        </div>

        <h3 className="font-semibold mb-2">{issue.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{issue.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {issue.location}
            </div>
            <Badge variant="outline" className="text-xs">
              {issue.category}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            {showUpvote && (
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center gap-1 ${issue.isUpvoted ? 'text-primary' : ''}`}
              >
                <Heart className={`h-3 w-3 ${issue.isUpvoted ? 'fill-current' : ''}`} />
                {issue.upvotes}
              </Button>
            )}
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-8 px-6 mb-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Citizen Portal</h1>
              <p className="text-primary-foreground/80">
                Report issues, track progress, and help improve your community
              </p>
            </div>
            <Button variant="secondary" size="lg" className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Report New Issue
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">My Issues</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">1</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">1</div>
              <div className="text-sm text-muted-foreground">Resolved</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">31</div>
              <div className="text-sm text-muted-foreground">Total Upvotes</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="my-issues" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="my-issues">My Issues</TabsTrigger>
            <TabsTrigger value="nearby">Nearby Issues</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>

          <TabsContent value="my-issues" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>My Reported Issues</CardTitle>
                <CardDescription>
                  Track the status of issues you've reported
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myIssues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} showUpvote={false} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nearby" className="space-y-6">
            {/* Search and Filters */}
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search nearby issues..." 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Issues List */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Issues in Your Area</CardTitle>
                <CardDescription>
                  Support community issues by upvoting and adding comments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyIssues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trending">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Trending Issues
                </CardTitle>
                <CardDescription>
                  Most upvoted and discussed issues in your city
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyIssues
                    .sort((a, b) => b.upvotes - a.upvotes)
                    .map((issue) => (
                      <IssueCard key={issue.id} issue={issue} />
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="shadow-card mt-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Camera className="h-6 w-6 mb-2" />
                Report Issue
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <MapPin className="h-6 w-6 mb-2" />
                Find Nearby
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <MessageSquare className="h-6 w-6 mb-2" />
                Contact Support
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <TrendingUp className="h-6 w-6 mb-2" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CitizenPortal;