window.L2P_DOCS_INDEX = [
    {
        "title":  "Import the linked2pay Integration Package",
        "summary":  "Import the linked2pay customization package into the validated Acumatica sandbox. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup-confirm-extension/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Import the integration package first. Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Installation Path",
        "summary":  "Install and configure linked2pay in a controlled sequence with a validation gate after every step. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup/",
        "keywords":  "Ordered installation path Setup map Change control On this page"
    },
    {
        "title":  "Publish and Verify the Integration",
        "summary":  "Publish the reviewed customization and verify that linked2pay components load in Acumatica. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup-confirm-publish/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Create and Link the ACH Payment Method",
        "summary":  "Create the Acumatica method for tokenized ACH and connect it to L2PACH. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup-payment-ach/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Configure the Credit Card Fee Item",
        "summary":  "Create the CCFEE non-stock item used when linked2pay applies a card-processing fee. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup-nonstock-items/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Vendor Payments Roadmap",
        "summary":  "Vendor-payment processing is planned for a future linked2pay - integration for Acumatica release and is not available today.",
        "url":  "/setup/outbound-payments/",
        "keywords":  "Current availability Roadmap guidance What to implement today On this page"
    },
    {
        "title":  "Known Issues",
        "summary":  "Review validated limitations, mitigations, and production risks before scoping, testing, or upgrading the integration.",
        "url":  "/setup/known-issues/",
        "keywords":  "Current known issues and limitations Recently resolved behavior Report a new issue On this page"
    },
    {
        "title":  "Payment Lifecycle",
        "summary":  "Understand card and ACH authorization, capture, settlement, declines, voids, refunds, returns, recurring failures, duplicate prevention, and accounting effects.",
        "url":  "/setup/payment-lifecycle/",
        "keywords":  "Accounting state versus gateway state Credit card lifecycle Level 2 and Level 3 processing ACH lifecycle Credit-card fee behavior Duplicate prevention and ambiguous outcomes Auto-Bill release recovery Webhook behavior Reconciliation checklist On this page"
    },
    {
        "title":  "Security and Data Handling",
        "summary":  "Apply least privilege, protect secrets, authenticate webhooks, define PCI boundaries, and keep sensitive information out of screenshots and support channels.",
        "url":  "/setup/security/",
        "keywords":  "Tokenization and sensitive data PCI responsibility boundaries API and webhook key handling Webhook authentication, idempotency, and retention Role-based access Audit and operational controls On this page"
    },
    {
        "title":  "Release Notes and Supported Versions",
        "summary":  "Track the validated Acumatica build, integration version, documentation changes, and upgrade requirements.",
        "url":  "/setup/release-notes/",
        "keywords":  "Current validated integration build Documentation release 2026-07-21 Documentation release 2026-07-15 Upgrade policy On this page"
    },
    {
        "title":  "Support and Escalation",
        "summary":  "Route implementation, Acumatica, gateway, and security issues with evidence needed for fast diagnosis and no sensitive-data exposure.",
        "url":  "/setup/support/",
        "keywords":  "Support contacts Severity and escalation What to include Before opening a case On this page"
    },
    {
        "title":  "Configure the Webhook Connection",
        "summary":  "Create an authenticated linked2pay callback so Acumatica receives transaction-status changes. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup-processing-webhook/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Logging and retention Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Testing Matrix",
        "summary":  "Run positive, negative, security, synchronization, lifecycle, permission, and reconciliation tests before production.",
        "url":  "/setup/testing/",
        "keywords":  "Test execution rules Formal testing matrix Acceptance criteria On this page"
    },
    {
        "title":  "VAR Implementation Guide",
        "summary":  "A repeatable Acumatica VAR framework for discovery, scoping, responsibilities, implementation, testing, go-live, and support transition.",
        "url":  "/setup/var-guide/",
        "keywords":  "Discovery questionnaire Scope template Implementation phases Go-live checklist Support handoff On this page"
    },
    {
        "title":  "Troubleshooting",
        "summary":  "Use a controlled diagnostic sequence, error matrix, logs, transaction history, and escalation criteria. Includes validation and troubleshooting guidance.",
        "url":  "/setup/troubleshooting/",
        "keywords":  "First-response sequence Common failures and fixes Logs and diagnostic records When to contact support On this page"
    },
    {
        "title":  "Create the Credit Card Payment Method",
        "summary":  "Create the Acumatica payment method used by linked2pay customer card transactions in Accounts Receivable.",
        "url":  "/setup/setup-payment-methods/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Product availability note Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Link the Card Processing Center and AR Profile Field",
        "summary":  "Associate L2PCC with the card payment method and define the token field used by customer payment profiles.",
        "url":  "/setup/setup-payment-link-center/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Create and Test the ACH Processing Center",
        "summary":  "Create a separate active processing center for ACH debit and credit transactions. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup-processing-ach/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Create the Credit Card Processing Center",
        "summary":  "Create the active linked2pay card processing center and select the integration plugin. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup-processing-center/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Now we connect Acumatica to linked2pay. Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Configure API Values",
        "summary":  "Enter merchant credentials and card behavior settings, then authenticate the processing center. Includes validation and troubleshooting guidance.",
        "url":  "/setup/setup-processing-api/",
        "keywords":  "Purpose Prerequisites Acumatica navigation path and screen ID Step-by-step instructions Field reference Expected result Validation steps Common errors Next step On this page"
    },
    {
        "title":  "Create Invoice (Template)",
        "summary":  "Create a template invoice that will be used for the recurring payment schedule.",
        "url":  "/demo/create-invoice-template/",
        "keywords":  ""
    },
    {
        "title":  "Create Invoice",
        "summary":  "Create a sample invoice in Acumatica and prepare it for the linked2pay payment flow.",
        "url":  "/demo/create-invoice/",
        "keywords":  "Open the invoice workspace"
    },
    {
        "title":  "Create Payment Methods in linked2pay",
        "summary":  "Move into linked2pay and create payment methods for later Acumatica use.",
        "url":  "/demo/create-payment-methods/",
        "keywords":  "Go to payment methods tab."
    },
    {
        "title":  "Pay with ACH",
        "summary":  "Process a customer bank-account profile without a credit-card fee.",
        "url":  "/demo/pay-with-ach/",
        "keywords":  "Select the linked2pay ACH profile Confirm there is no card fee Process and monitor settlement"
    },
    {
        "title":  "Generate Recurring Invoices",
        "summary":  "Run Acumatica\u0027s standard process manually for the demo, then schedule it for unattended production use.",
        "url":  "/demo/generate-invoices/",
        "keywords":  "Open Generate Recurring Transactions Run the due schedules Review generated documents Schedule production generation"
    },
    {
        "title":  "Add the Invoice Template to a Schedule",
        "summary":  "Tell Acumatica when and how often to create invoices from the recurring template.",
        "url":  "/demo/add-to-schedule/",
        "keywords":  "Open Recurring Transactions Define the billing pattern Keep the two schedules distinct"
    },
    {
        "title":  "Demo Walkthrough",
        "summary":  "Follow the demo path in order: start with customers and payment methods, move into invoice and recurring payment flows, then finish with linked2pay Center.",
        "url":  "/demo/",
        "keywords":  "Customers, payment methods, invoices, recurring payments, then linked2pay Center."
    },
    {
        "title":  "First Customer Sync",
        "summary":  "Use one action to create the customer in linked2pay and connect the Acumatica record.",
        "url":  "/demo/board-customer/",
        "keywords":  "Open the linked2pay Integration tab Click Sync with linked2pay Confirm the connection Choose the Auto-Bill policy Verify linked2pay"
    },
    {
        "title":  "Create Customer",
        "summary":  "Start in Acumatica by creating or opening the customer record that will be used for the rest of the linked2pay demo.",
        "url":  "/demo/create-customer/",
        "keywords":  "Create a new Customer entry"
    },
    {
        "title":  "Bulk Sync Customers",
        "summary":  "Create, update, recover, and mirror multiple connected customers while keeping row-level results.",
        "url":  "/demo/bulk-sync-customers/",
        "keywords":  "Open linked2pay Center Choose the scope Let each customer follow the correct path Review the progress report Verify linked2pay"
    },
    {
        "title":  "Sync Wallet Payment Methods",
        "summary":  "Mirror linked2pay cards and bank accounts into Acumatica using each wallet item\u0027s Payment Profile ID.",
        "url":  "/demo/sync-customer-payment-methods/",
        "keywords":  "Create wallet methods in linked2pay Sync the customer in Acumatica"
    },
    {
        "title":  "Update and Sync a Customer",
        "summary":  "Send current Acumatica customer information to the existing linked2pay contact and refresh its wallet.",
        "url":  "/demo/sync-customer/",
        "keywords":  "Update the Acumatica customer Run Sync with linked2pay Recovery when the portal contact was deleted Verify the result"
    },
    {
        "title":  "Implementation Documentation",
        "summary":  "Install, configure, test, troubleshoot, and deploy linked2pay for customer credit card and ACH payment processing inside Acumatica ERP.",
        "url":  "/setup/",
        "keywords":  "Product scope Choose your starting point Guidance by role On this page"
    },
    {
        "title":  "Before You Begin",
        "summary":  "Confirm version support, modules, credentials, environments, network access, limitations, and implementation effort before publishing the integration.",
        "url":  "/setup/before-you-begin/",
        "keywords":  "Supported Acumatica versions Required modules, licenses, roles, and permissions linked2pay account and credentials Sandbox versus production Network, firewall, and webhook requirements Current scope boundaries Readiness checkpoint On this page"
    },
    {
        "title":  "Automation Schedules",
        "summary":  "Configure unattended recurring invoice generation and linked2pay Auto-Bill in the correct order.",
        "url":  "/setup/automation/",
        "keywords":  "Purpose Prerequisites Schedule 1: Generate Recurring Transactions Schedule 2: linked2pay Auto-Bill Auto-Bill eligibility Monitoring and recovery Validation steps On this page"
    },
    {
        "title":  "Pay with Card",
        "summary":  "Create an Acumatica payment, apply the configured card fee, and process it through linked2pay.",
        "url":  "/demo/pay-with-card/",
        "keywords":  "Start from a released invoice Review the automatic processing fee Allow a payment-level exception Process the payment Commercial-card data and fallback Verify both systems"
    },
    {
        "title":  "Pay with linked2pay Auto-Bill",
        "summary":  "Process all eligible due AR invoices with each customer\u0027s active default linked2pay payment profile.",
        "url":  "/demo/pay-with-autopaybill/",
        "keywords":  "Prepare an eligible invoice Verify the customer Open linked2pay Auto-Bill Process and review results Recover a captured but unreleased payment"
    },
    {
        "title":  "Assign Cash Accounts and Defaults",
        "summary":  "Prepare one or many customers for payment processing from one central Acumatica screen.",
        "url":  "/demo/payment-defaults/",
        "keywords":  "Open linked2pay Center Assign a cash account Set the default payment method Review every row"
    },
    {
        "title":  "Automate Recurring Invoice Payments",
        "summary":  "Generate due invoices first, then let linked2pay Auto-Bill charge eligible customers and release their payments.",
        "url":  "/demo/recurring-pay-with-autopaybill/",
        "keywords":  "Demonstrate the second half manually Show row-level progress Configure the unattended daily sequence Verify and reconcile"
    },
    {
        "title":  "Mirror Wallet Changes",
        "summary":  "Demonstrate create, update, delete, and restore behavior without losing Acumatica payment history.",
        "url":  "/demo/payment-methods-crud/",
        "keywords":  "Add or update a wallet method Sync without duplicates Delete and restore Default and deletion behavior"
    }
];
