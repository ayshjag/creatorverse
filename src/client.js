//src/client.js
import { createClient } from '@supabase/supabase-js';

const URL = 'https://eqtsfkgvzsfiickkznqy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdHNma2d2enNmaWlja2t6bnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5Mjk2MjMsImV4cCI6MjAzOTUwNTYyM30.6Ag9rMKKAPrcF02nqqSUjTmqtdi2Rn0OJFvN5xK5010';

export const supabase = createClient(URL, API_KEY);