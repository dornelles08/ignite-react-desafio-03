/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";

export interface GitHubIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
  };
  labels: any[]; // pode ser detalhado se necessário
  state: string;
  locked: boolean;
  assignee: any | null;
  assignees: any[];
  milestone: any | null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  type: string | null;
  active_lock_reason: string | null;
  sub_issues_summary: {
    total: number;
    completed: number;
    percent_completed: number;
  };
  body: string;
}

export interface GitHubUserDetails {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string;
  hireable: boolean | null;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface GithubContextType {
  fetchUserDetails: () => void;
  fetchIssues: (query?: string) => void;
  user: GitHubUserDetails;
  organization: string | null;
  issues: GitHubIssue[];
}

export const GithubContext = createContext({} as GithubContextType);

interface GithubProviderProps {
  children: React.ReactNode;
}

const githubUser = "rocketseat-education";

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<GitHubUserDetails>({} as GitHubUserDetails);
  const [organization, setOrganization] = useState("");
  const [issues, setIssues] = useState<GitHubIssue[]>([]);

  async function fetchUserDetails() {
    const response = await api.get(`/users/${githubUser}`);
    console.log(response.data);
    setUser(response.data);
  }

  async function fetchOrganizationDetails() {
    const response = await api.get(user.organizations_url);
    console.log(response.data);
    setOrganization(response.data[0] && response.data[0].login);
  }

  async function fetchIssues(query?: string) {
    const response = await api.get(`search/issues`, {
      params: {
        q: `${query} repo:${githubUser}/reactjs-github-blog-challenge`,
      },
    });
    console.log(response.data);
    setIssues(response.data.items);
  }

  useEffect(() => {
    fetchUserDetails();
    fetchOrganizationDetails();
    fetchIssues();
  }, []);

  return (
    <GithubContext.Provider value={{ fetchUserDetails, user, organization, issues, fetchIssues }}>
      {children}
    </GithubContext.Provider>
  );
}
