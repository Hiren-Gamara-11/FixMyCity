import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Dashboard from '@/components/Dashboard';
import CitizenPortal from '@/components/CitizenPortal';
import IssueReportForm from '@/components/IssueReportForm';
import { 
  Building2, 
  Users, 
  FileText,
  ArrowRight,
  CheckCircle,
  MapPin,
  TrendingUp,
  Smartphone,
  Shield,
  Zap
} from 'lucide-react';

const Index = () => {
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'dashboard') {
    return <Dashboard />;
  }

  if (currentView === 'citizen') {
    return <CitizenPortal />;
  }

  if (currentView === 'report') {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-gradient-primary text-primary-foreground py-6 px-6 mb-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Report Issue</h1>
            <Button variant="secondary" onClick={() => setCurrentView('home')}>
              Back to Home
            </Button>
          </div>
        </div>
        <IssueReportForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-primary-foreground py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-16 w-16 mr-4" />
            <div className="text-left">
              <h1 className="text-5xl font-bold mb-2">CivicTracker</h1>
              <p className="text-xl text-primary-foreground/80">Smart Governance Platform</p>
            </div>
          </div>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Empowering citizens and governments to collaborate for better cities through 
            real-time issue reporting, tracking, and resolution
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setCurrentView('citizen')}
              className="flex items-center gap-2"
            >
              <Users className="h-5 w-5" />
              Citizen Portal
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setCurrentView('dashboard')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Building2 className="h-5 w-5 mr-2" />
              Admin Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setCurrentView('report')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <FileText className="h-5 w-5 mr-2" />
              Report Issue
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Civic Management Solution</h2>
            <p className="text-xl text-muted-foreground">
              Built for Smart India Hackathon - Bridging Citizens and Government
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Citizen Features */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-primary" />
                  Citizen Portal
                </CardTitle>
                <CardDescription>Easy reporting and tracking for citizens</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    One-click issue reporting with photo upload
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    GPS auto-location detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Real-time status tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Community upvoting system
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Push notifications for updates
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Government Features */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  Government Dashboard
                </CardTitle>
                <CardDescription>Comprehensive admin and analytics panel</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Real-time issue monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Auto-department assignment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Priority-based task management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Performance analytics & reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Hotspot identification & trends
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI/ML Features */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  AI-Powered Features
                </CardTitle>
                <CardDescription>Smart automation and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Auto image classification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Priority prediction algorithm
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Hotspot detection with clustering
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Voice-to-text reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Predictive maintenance insights
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-muted py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-muted-foreground">
              Scalable, secure, and future-ready architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Frontend & Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• React Native (Mobile App)</div>
                  <div>• React.js (Web Dashboard)</div>
                  <div>• Tailwind CSS (Styling)</div>
                  <div>• TypeScript (Type Safety)</div>
                  <div>• PWA Support</div>
                  <div>• Responsive Design</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Backend & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• Node.js + Express</div>
                  <div>• MongoDB Atlas</div>
                  <div>• Firebase (Auth & Storage)</div>
                  <div>• Google Maps API</div>
                  <div>• Cloudinary (Media)</div>
                  <div>• Socket.io (Real-time)</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>AI/ML Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• TensorFlow.js</div>
                  <div>• HuggingFace Models</div>
                  <div>• OpenAI Whisper</div>
                  <div>• Scikit-learn</div>
                  <div>• Computer Vision</div>
                  <div>• NLP Processing</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Analytics & Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• Real-time Dashboards</div>
                  <div>• Performance Metrics</div>
                  <div>• Geospatial Analytics</div>
                  <div>• Trend Analysis</div>
                  <div>• Custom Reports</div>
                  <div>• Data Visualization</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Try the Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-elegant transition-shadow cursor-pointer" onClick={() => setCurrentView('citizen')}>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Citizen Experience</CardTitle>
                <CardDescription>Experience how citizens report and track issues</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Try Citizen Portal
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow cursor-pointer" onClick={() => setCurrentView('dashboard')}>
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Government Dashboard</CardTitle>
                <CardDescription>See how officials manage and resolve issues</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Try Admin Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow cursor-pointer" onClick={() => setCurrentView('report')}>
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Report an Issue</CardTitle>
                <CardDescription>Try the issue reporting flow with AI features</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Report Issue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card border-t py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold">CivicTracker</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Smart India Hackathon 2024 • Civic Issue Management Platform
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>Built with React + TypeScript</span>
            <span>•</span>
            <span>AI/ML Powered</span>
            <span>•</span>
            <span>Real-time Updates</span>
            <span>•</span>
            <span>Mobile First</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;