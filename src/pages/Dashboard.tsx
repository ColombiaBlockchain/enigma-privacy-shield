import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Plus, ArrowRightLeft, Send, Key, CheckCircle, XCircle, Eye, ExternalLink } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);

  // Mock data
  const kpis = [
    { label: 'Tokens Created', value: '3', change: '+1 this month' },
    { label: 'Migrations', value: '1', change: 'Active' },
    { label: 'Auditors', value: '2', change: 'Assigned' },
    { label: 'Last Transaction', value: '2h ago', change: 'Transfer' },
  ];

  const tokens = [
    {
      name: 'AvalPrivate Token',
      address: '0xAbc123...def789',
      type: 'IERC20',
      supply: '1,000,000',
      auditor: '0x456...123',
      status: 'Active'
    },
    {
      name: 'Demo Token',
      address: '0x789...456',
      type: 'IERC20',
      supply: '500,000',
      auditor: 'Pending',
      status: 'Active'
    },
  ];

  const auditorRequests = [
    {
      id: 1,
      requester: '0x987...654',
      orgName: 'CryptoAudit Co.',
      token: 'AvalPrivate Token',
      note: 'Specialized in DeFi privacy audits',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      requester: '0x321...987',
      orgName: 'SecureBlock',
      token: 'All tokens',
      note: 'Full compliance audit services',
      timestamp: '1 day ago'
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted">Manage your private tokens and auditors</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Link to="/compliance">
              <GlassButton variant="secondary" size="sm" iconLeft={<Key className="h-4 w-4" />}>
                Manage Keys
              </GlassButton>
            </Link>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <GlassCard key={index}>
              <GlassCardContent className="p-6">
                <div className="text-2xl font-bold mb-1">{kpi.value}</div>
                <div className="text-sm font-medium mb-1">{kpi.label}</div>
                <div className="text-xs text-muted">{kpi.change}</div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* Quick Actions */}
        <GlassCard className="mb-8">
          <GlassCardHeader>
            <GlassCardTitle>Quick Actions</GlassCardTitle>
            <GlassCardDescription>Common tasks to get you started</GlassCardDescription>
          </GlassCardHeader>
          <GlassCardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/create/step-1">
                <GlassCard className="cursor-pointer hover:shadow-glass-lg transition-smooth border-glass-border">
                  <GlassCardContent className="p-6 text-center">
                    <Plus className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="font-semibold mb-2">Create Token</div>
                    <div className="text-sm text-muted">Launch new private token</div>
                  </GlassCardContent>
                </GlassCard>
              </Link>

              <Link to="/migrate/step-1">
                <GlassCard className="cursor-pointer hover:shadow-glass-lg transition-smooth border-glass-border">
                  <GlassCardContent className="p-6 text-center">
                    <ArrowRightLeft className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="font-semibold mb-2">Migrate Token</div>
                    <div className="text-sm text-muted">Convert ERC20 to IERC20</div>
                  </GlassCardContent>
                </GlassCard>
              </Link>

              <Link to="/transfer">
                <GlassCard className="cursor-pointer hover:shadow-glass-lg transition-smooth border-glass-border">
                  <GlassCardContent className="p-6 text-center">
                    <Send className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="font-semibold mb-2">Private Transfer</div>
                    <div className="text-sm text-muted">Send tokens privately</div>
                  </GlassCardContent>
                </GlassCard>
              </Link>
            </div>
          </GlassCardContent>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tokens Table */}
          <div className="lg:col-span-2">
            <GlassCard>
              <GlassCardHeader>
                <GlassCardTitle>Your Tokens</GlassCardTitle>
                <GlassCardDescription>Manage your private token portfolio</GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Supply</TableHead>
                      <TableHead>Auditor</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tokens.map((token, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{token.name}</div>
                            <Badge variant="outline" className="text-xs mt-1">{token.type}</Badge>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{token.address}</TableCell>
                        <TableCell>{token.supply}</TableCell>
                        <TableCell>
                          {token.auditor === 'Pending' ? (
                            <Badge variant="secondary">Pending</Badge>
                          ) : (
                            <span className="font-mono text-sm">{token.auditor}</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Link to={`/token/${token.address}`}>
                              <GlassButton variant="ghost" size="sm">
                                <Eye className="h-3 w-3" />
                              </GlassButton>
                            </Link>
                            <Link to={`/transfer?token=${token.address}`}>
                              <GlassButton variant="ghost" size="sm">
                                <Send className="h-3 w-3" />
                              </GlassButton>
                            </Link>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </GlassCardContent>
            </GlassCard>
          </div>

          {/* Auditor Requests */}
          <div>
            <GlassCard>
              <GlassCardHeader>
                <GlassCardTitle>Auditor Requests</GlassCardTitle>
                <GlassCardDescription>Pending audit requests</GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <div className="space-y-4">
                  {auditorRequests.map((request) => (
                    <div key={request.id} className="p-4 glass rounded-lg border-glass-border">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold text-sm">{request.orgName}</div>
                        <div className="text-xs text-muted">{request.timestamp}</div>
                      </div>
                      <div className="text-xs text-muted font-mono mb-2">{request.requester}</div>
                      <div className="text-sm mb-3">{request.note}</div>
                      <div className="flex items-center space-x-2">
                        <GlassButton variant="success" size="sm">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Accept
                        </GlassButton>
                        <GlassButton variant="ghost" size="sm">
                          <XCircle className="h-3 w-3 mr-1" />
                          Decline
                        </GlassButton>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCardContent>
            </GlassCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;