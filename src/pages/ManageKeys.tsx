import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from '@/components/ui/glass-card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { useToast } from '@/hooks/use-toast';
import { Key, Plus, Copy, Download, Trash2, Eye, EyeOff } from 'lucide-react';

interface ViewKey {
  id: string;
  name: string;
  type: 'audit' | 'compliance' | 'temp';
  token: string;
  created: string;
  status: 'active' | 'revoked';
  permissions: string[];
}

const ManageKeys: React.FC = () => {
  const { language } = useApp();
  const { t } = useTranslation(language);
  const { toast } = useToast();
  
  const [keys, setKeys] = useState<ViewKey[]>([
    {
      id: '1',
      name: 'Main Audit Key',
      type: 'audit',
      token: 'PRIV Token',
      created: '2024-01-15',
      status: 'active',
      permissions: ['view_transactions', 'view_balances']
    },
    {
      id: '2',
      name: 'Compliance Review',
      type: 'compliance',
      token: 'SECURE Token',
      created: '2024-02-01',
      status: 'active',
      permissions: ['view_transactions']
    },
    {
      id: '3',
      name: 'Temp Access Q1',
      type: 'temp',
      token: 'PRIV Token',
      created: '2024-03-01',
      status: 'revoked',
      permissions: ['view_balances']
    }
  ]);
  
  const [generateModalOpen, setGenerateModalOpen] = useState(false);
  const [newKeyData, setNewKeyData] = useState({
    name: '',
    type: 'audit' as 'audit' | 'compliance' | 'temp',
    token: '',
    permissions: [] as string[]
  });

  const handleGenerateKey = () => {
    const newKey: ViewKey = {
      id: Math.random().toString(36).substr(2, 9),
      name: newKeyData.name,
      type: newKeyData.type,
      token: newKeyData.token,
      created: new Date().toISOString().split('T')[0],
      status: 'active',
      permissions: newKeyData.permissions
    };
    
    setKeys(prev => [...prev, newKey]);
    setGenerateModalOpen(false);
    setNewKeyData({ name: '', type: 'audit', token: '', permissions: [] });
    
    toast({
      title: "Success",
      description: "View key generated successfully",
    });
  };

  const handleRevokeKey = (keyId: string) => {
    setKeys(prev => prev.map(key => 
      key.id === keyId ? { ...key, status: 'revoked' as const } : key
    ));
    
    toast({
      title: "Success",
      description: "View key revoked",
    });
  };

  const handleCopyKey = (keyId: string) => {
    // In a real app, this would copy the actual key
    navigator.clipboard.writeText(`vk_${keyId}_${Math.random().toString(36)}`);
    
    toast({
      title: "Success",
      description: "Key copied to clipboard",
    });
  };

  const handleExportKey = (keyId: string) => {
    toast({
      title: "Success",
      description: "Key exported successfully",
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'audit': return 'default';
      case 'compliance': return 'secondary';
      case 'temp': return 'outline';
      default: return 'default';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'default' : 'destructive';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{t('manage_keys_title')}</h1>
            <p className="text-muted">Manage view keys for privacy compliance and auditing</p>
          </div>
          <GlassButton 
            variant="hero"
            onClick={() => setGenerateModalOpen(true)}
            iconLeft={<Plus className="h-4 w-4" />}
          >
            {t('generate_key')}
          </GlassButton>
        </div>

        {/* Keys Table */}
        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center space-x-2">
              <Key className="h-5 w-5" />
              <span>View Keys</span>
            </GlassCardTitle>
          </GlassCardHeader>
          <GlassCardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('key_name')}</TableHead>
                  <TableHead>{t('key_type')}</TableHead>
                  <TableHead>Token</TableHead>
                  <TableHead>{t('key_created')}</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>{t('key_actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keys.map((key) => (
                  <TableRow key={key.id}>
                    <TableCell className="font-medium">{key.name}</TableCell>
                    <TableCell>
                      <Badge variant={getTypeColor(key.type)}>
                        {key.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{key.token}</TableCell>
                    <TableCell>{key.created}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(key.status)}>
                        {key.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <GlassButton
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopyKey(key.id)}
                          disabled={key.status === 'revoked'}
                        >
                          <Copy className="h-3 w-3" />
                        </GlassButton>
                        <GlassButton
                          variant="ghost"
                          size="sm"
                          onClick={() => handleExportKey(key.id)}
                          disabled={key.status === 'revoked'}
                        >
                          <Download className="h-3 w-3" />
                        </GlassButton>
                        <GlassButton
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRevokeKey(key.id)}
                          disabled={key.status === 'revoked'}
                          className="text-danger hover:bg-danger/10"
                        >
                          <Trash2 className="h-3 w-3" />
                        </GlassButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassCardContent>
        </GlassCard>

        {/* Generate Key Modal */}
        <Dialog open={generateModalOpen} onOpenChange={setGenerateModalOpen}>
          <DialogContent className="sm:max-w-md glass backdrop-blur-glass border-glass-border max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{t('generate_key')}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="keyName">{t('key_name')}</Label>
                <Input
                  id="keyName"
                  placeholder="Enter key name"
                  value={newKeyData.name}
                  onChange={(e) => setNewKeyData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keyType">{t('key_type')}</Label>
                <Select value={newKeyData.type} onValueChange={(value: any) => setNewKeyData(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="audit">Audit</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                    <SelectItem value="temp">Temporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="token">Token</Label>
                <Input
                  id="token"
                  placeholder="Select or enter token"
                  value={newKeyData.token}
                  onChange={(e) => setNewKeyData(prev => ({ ...prev, token: e.target.value }))}
                />
              </div>

              <div className="flex space-x-3">
                <GlassButton 
                  variant="hero" 
                  className="flex-1"
                  onClick={handleGenerateKey}
                  disabled={!newKeyData.name || !newKeyData.token}
                >
                  {t('generate_key')}
                </GlassButton>
                <GlassButton 
                  variant="secondary" 
                  onClick={() => setGenerateModalOpen(false)}
                >
                  {t('cancel')}
                </GlassButton>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default ManageKeys;