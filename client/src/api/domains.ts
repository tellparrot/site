import api from './api.ts';

// Get Domains List
// GET /api/domains
// Response: { domains: Array<{ id: string, name: string, owner: string, policies: number }> }
export const getDomains = () => {
    // Mocking the response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                domains: [
                    {id: '1', name: 'Customer Data', owner: 'John Smith', policies: 12},
                    {id: '2', name: 'Financial Data', owner: 'Jane Doe', policies: 8},
                    {id: '3', name: 'Product Data', owner: 'Mike Johnson', policies: 15},
                    {id: '4', name: 'Marketing Data', owner: 'Sarah Wilson', policies: 6},
                ],
            });
        }, 500);
    });
};

// Get Domain Policies
// GET /api/domains/:id/policies
// Response: { policies: Array<{ id: string, name: string, description: string, status: string }> }
export const getDomainPolicies = (domainId: string) => {
    // Mocking the response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                policies: [
                    {id: '1', name: 'Data Retention', description: 'Data must be retained for 7 years', status: 'active'},
                    {id: '2', name: 'Access Control', description: 'Strict access control requirements', status: 'active'},
                    {id: '3', name: 'Data Quality', description: 'Data quality standards', status: 'draft'},
                ],
            });
        }, 500);
    });
};

// Create Domain
// POST /api/domains
// Request: { name: string, owner: string }
// Response: { success: boolean, domain: { id: string, name: string, owner: string, policies: number } }
export const createDomain = (data: { name: string; owner: string }) => {
    // Mocking the response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                domain: {
                    id: '5',
                    name: data.name,
                    owner: data.owner,
                    policies: 0,
                },
            });
        }, 500);
    });
};