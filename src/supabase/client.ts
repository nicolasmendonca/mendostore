import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { EnvironmentManager } from '../environment/EnvironmentManager';

export const supabaseClient: SupabaseClient = createClient(
	EnvironmentManager.supabaseUrl,
	EnvironmentManager.supabaseAnonKey
);
